import { WidgetApi } from "matrix-widget-api"

const fragmentString = (window.location.hash || "?")
const params = new URLSearchParams(fragmentString.substring(Math.max(fragmentString.indexOf('?'), 0)))

const widgetId = params.get("widgetId")
const userId = params.get("userId")

const api = new WidgetApi(widgetId || "")

api.on("ready", function () {
  alert("what a test!")
})

api.start()
