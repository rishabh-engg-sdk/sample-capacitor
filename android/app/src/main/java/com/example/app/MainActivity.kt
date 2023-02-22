package com.example.app

import `in`.co.example.ActivityPlugin
import android.os.Bundle
import com.example.plugin.EchoPlugin
import com.getcapacitor.BridgeActivity
import com.moengage.capacitor.MoECapacitorCorePlugin

class MainActivity : BridgeActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    registerPlugins(
      listOf(
        MoECapacitorCorePlugin::class.java, EchoPlugin::class.java,
        ActivityPlugin::class.java
      )
    )
    super.onCreate(savedInstanceState)
  }
}
