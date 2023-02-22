package com.example.app

import android.app.Application
import android.graphics.Bitmap.Config
import android.util.Log
import com.google.firebase.messaging.FirebaseMessaging
import com.moengage.capacitor.MoEInitializer.initialiseDefaultInstance
import com.moengage.core.LogLevel
import com.moengage.core.MoEngage
import com.moengage.core.config.LogConfig
import com.moengage.core.config.NotificationConfig
import com.moengage.firebase.MoEFireBaseHelper

class SampleApplication : Application() {
  override fun onCreate() {
    super.onCreate()
    val moEngage = MoEngage.Builder(this, "DAO6UGZ73D9RTK8B5W96TPYN")
      .configureNotificationMetaData(
        NotificationConfig(
          R.drawable.ic_launcher_background, R.drawable.ic_launcher_foreground
        )
      ).configureLogs(LogConfig(LogLevel.DEBUG))
    initialiseDefaultInstance(this, moEngage)
  }
}
