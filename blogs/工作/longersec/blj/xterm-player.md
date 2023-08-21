### xterm-player

---

#### Player.ts 

1. 构造方法参数

   url: 文件地址

   el: 绘图元素

   options: xterm属性 

```typescript
constructor(
    url: string,
    el: HTMLElement,
    options: IPlayerOptions = {}
  ) {
    this.el = el
    this._url = url
    this._term = createTerminal(options)
    this._audio = new Audio()
    this._view = new PlayerView(this)

    el.append(this._view.element)
    this._term.open(this._view.videoWrapper)
    this._term.focus()

    this._load()
 }
```

2. 构造时调用_load方法，进行配置初始化。

```
  private _load(): void {
    this._error = null
    this._loading = true

    this._term.reset()
    this._timer.dispose()
    this._queue.dispose()
    this._timer = new NullTimer()
    this._queue = new NullFrameQueue()

    this._onLoading.fire()
    this._onStateChanged.fire(this.state)

    // 解析cast文件
    fetchCast(this._url).then((cast) => {
      this._term.resize(cast.header.width, cast.header.height)

      if (cast.header.audio) {
        this._timer = new MediaTimer(this._audio)
        this._audio.src = cast.header.audio
        this._audio.load()
      } else {
        this._timer = new SimpleTimer(new AnimationFrameTicker(), cast.header.duration)
      }

      this._queue = new CastFrameQueue(cast, 30)
      this._timer.onReady(() => {
        debugger
        this._loading = false
        this._onReady.fire()
        this._onStateChanged.fire(this.state)
        this._timer.onTick(this._render.bind(this))
        this._timer.onStateChange(() => this._onStateChanged.fire(this.state))
      })
    }).catch(err => {
      console.error(err)
      this._error = err
      this._onStateChanged.fire(this.state)
    })
  }
```

#### Timer.ts







```
执行流程

SimpleTimer() start 启动

const now = this._ticker.now()
const delta = (now - this._lasttime) * this._timescale
if ((this._time + delta) > this._duration) {
this._time = this._duration
this.stop()
} else {
this._time += delta
}
this._lasttime = now
this._onTickCb(this._time)
 |
 |
 requestAnimationFrame(this._tick1.bind(this)) 递归调用_tick1 方法
 (以下为递归调用)
 ｜
 ｜
 this._cb() 执行传入的方法
 ｜
 ｜
 _onTickCb(时间) 渲染数据_render
 |
 |
  onAfterRender()  this.controlBar.currentTime = this._player.currentTime


```

