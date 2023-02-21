package com.example.plugin

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "Echo")
class EchoPlugin : Plugin() {
  private val logger = Logger()


  @PluginMethod
  fun echo(call: PluginCall) {
    val value = call.getString("value") ?: return
    val ret = JSObject()
    ret.put("value", logger.log(value))
    call.resolve(ret)
  }

  @PluginMethod
  fun openMap(call: PluginCall) {
    val latitude = call.getDouble("latitude")
    val longitude = call.getDouble("longitude")

    // more logic
    call.resolve()
  }
}
