package com.capacitor.example

import com.capacitor.example.callback.ActivityLifecycleCallbackImpl
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "Activity")
class ActivityPlugin : Plugin() {

    @PluginMethod
    fun registerForActivityCallbacks(call: PluginCall) {
        activity.application.registerActivityLifecycleCallbacks(ActivityLifecycleCallbackImpl(::sendCallback))
        call.resolve()
    }

    private fun sendCallback(eventName: String, payload: JSObject) {
        notifyListeners(eventName, payload)
    }
}
