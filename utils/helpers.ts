let throttlePause = false
let debounceTimer: number

export const throttle = (callback: () => {}, time: number) => {
  if (throttlePause) return
  throttlePause = true

  setTimeout(() => {
    callback()
    throttlePause = false
  }, time)
}

export const debounce = (callback: TimerHandler, time: number) => {
  window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(callback, time)
}
