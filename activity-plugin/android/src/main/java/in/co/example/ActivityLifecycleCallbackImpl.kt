package `in`.co.example

import android.app.Activity
import android.app.Application
import android.os.Bundle
import com.getcapacitor.JSObject

private val eventMap = mapOf(
  EventType.CREATED to "onActivityCreated",
  EventType.STARTED to "onActivityStarted",
  EventType.RESUMED to "onActivityResumed",
  EventType.PAUSED to "onActivityPaused",
  EventType.STOPPED to "onActivityStopped",
  EventType.SAVE_INSTANCE_STATE to "onActivitySaveInstanceState",
  EventType.DESTROYED to "onActivityDestroyed"
)

class ActivityLifecycleCallbackImpl(
  private val onEvent: (eventName: String, payload: JSObject)
  -> Unit
) : Application
.ActivityLifecycleCallbacks {

  override fun onActivityCreated(p0: Activity, p1: Bundle?) {
    this.sendCallback(EventType.CREATED, p0.localClassName)
  }

  override fun onActivityStarted(p0: Activity) {
    this.sendCallback(EventType.STOPPED, p0.localClassName)
  }

  override fun onActivityResumed(p0: Activity) {
    this.sendCallback(EventType.RESUMED, p0.localClassName)
  }

  override fun onActivityPaused(p0: Activity) {
    this.sendCallback(EventType.PAUSED, p0.localClassName)
  }

  override fun onActivityStopped(p0: Activity) {
    this.sendCallback(EventType.STOPPED, p0.localClassName)
  }

  override fun onActivitySaveInstanceState(p0: Activity, p1: Bundle) {
    this.sendCallback(EventType.SAVE_INSTANCE_STATE, p0.localClassName)
  }

  override fun onActivityDestroyed(p0: Activity) {
    this.sendCallback(EventType.DESTROYED, p0.localClassName)
  }

  private fun sendCallback(eventType: EventType, activityName: String) {
    val eventName = eventMap[eventType] ?: return
    val payload = JSObject()
    payload.put("activityName", activityName)
    onEvent(eventName, payload)
  }
}

enum class EventType {
  CREATED,
  STARTED,
  RESUMED,
  PAUSED,
  STOPPED,
  SAVE_INSTANCE_STATE,
  DESTROYED


}
