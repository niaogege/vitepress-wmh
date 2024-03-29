---
layout: doc
description: 如何从0开始学习vue3
title: vue3从基本概念开始搞起
cover: https://www.bythewayer.com/img/vue3.webp
recommend: 3
tag:
  - vue
  - study
---

# 依赖收集

在数据读取和更新时定义好了依赖收集和更新派发事件的执行时机之后，我们再回头看一下 Vue 3 的依赖收集系统。

通过上文我们也知道在 Vue 2 中是给每个对象增加一个 Dep 实例来保存每个对象所关联的 Watcher 数组，然后更新时遍历执行，那么 Vue 3 是不是也是这么操作的呢？

答案是没有的。

因为 Vue 3 采用的 Proxy 可以直接拦截对象的访问和更新，而无需像 Object.defineProperty 一样单独为每个属性定义拦截，所以 一个引用类型数据我们只需要收集一个依赖即可，通过一个全局变量进行所有的依赖数据的依赖管理。

```js
const targetMap = new WeakMap()
let shouldTrack = true
let activeEffect = null

function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target)
    if (!depsMap) targetMap.set(target, (depsMap = new Map()))
    let dep = depsMap.get(key)
    if (!dep) depsMap.set(key, (dep = createDep()))
    const eventInfo = { effect: activeEffect, target, type, key }
    trackEffects(dep, eventInfo)
  }
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit
      shouldTrack2 = !wasTracked(dep)
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect)
  }
  if (shouldTrack) {
    dep.add(activeEffect)
    activeEffect.deps.push(dep)
  }
}
```

## 副作用定义

Vue 3 中的副作用函数称为 effect，官方也提供了该函数的直接调用，在 执行时能自动收集相关依赖。其定义如下：

```js
function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn
  }
  const _effect = new ReactiveEffect(fn)
  if (options) {
    extend(_effect, options)
    if (options.scope) recordEffectScope(_effect, options.scope)
  }
  if (!options || !options.lazy) {
    _effect.run()
  }
  const runner = _effect.run.bind(_effect)
  runner.effect = _effect
  return runner
}
```
