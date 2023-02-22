package com.capacitor.example.callback

import android.app.Activity
import android.app.Application
import android.os.Bundle
import com.getcapacitor.JSObject

class ActivityLifecycleCallbackImpl(private val onEvent: (eventName: String, payload: JSObject)
-> Unit) :
    Application.ActivityLifecycleCallbacks {

    override fun onActivityCreated(activity: Activity, bundle: Bundle?) {
        sendCallback("onActivityCreated", activity.localClassName)
    }

    override fun onActivityStarted(activity: Activity) {
        sendCallback("onActivityStarted", activity.localClassName)
    }

    override fun onActivityResumed(activity: Activity) {
        sendCallback("onActivityResumed", activity.localClassName)
    }

    override fun onActivityPaused(activity: Activity) {
        sendCallback("onActivityPaused", activity.localClassName)
    }

    override fun onActivityStopped(activity: Activity) {
        sendCallback("onActivityStopped", activity.localClassName)
    }

    override fun onActivitySaveInstanceState(activity: Activity, bundle: Bundle) {
        sendCallback("onActivitySaveInstanceState", activity.localClassName)
    }

    override fun onActivityDestroyed(activity: Activity) {
        sendCallback("onActivityDestroyed", activity.localClassName)
    }

    private fun sendCallback(eventType: String, activityName: String) {
        val payload = JSObject()
        payload.put("activityName", activityName)
        onEvent(eventType, payload)
    }
}

