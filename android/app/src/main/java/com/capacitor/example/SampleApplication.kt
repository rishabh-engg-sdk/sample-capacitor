package com.capacitor.example

import android.app.Application
import com.moengage.capacitor.MoEInitializer.initialiseDefaultInstance
import com.moengage.core.LogLevel
import com.moengage.core.MoEngage
import com.moengage.core.config.LogConfig
import com.moengage.core.config.NotificationConfig

class SampleApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        val moEngage = MoEngage.Builder(this, "DAO6UGZ73D9RTK8B5W96TPYN")
            .configureLogs(LogConfig(LogLevel.VERBOSE))
            .configureNotificationMetaData(
                NotificationConfig(
                    R.drawable.ic_launcher_background,
                    R.drawable.ic_launcher_foreground
                )
            ).configureLogs(LogConfig(LogLevel.DEBUG))
        initialiseDefaultInstance(this, moEngage)
    }
}
