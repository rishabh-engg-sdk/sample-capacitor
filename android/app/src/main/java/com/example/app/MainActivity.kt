package com.example.app

import android.os.Bundle
import com.example.plugin.MyPluginPlugin
import com.getcapacitor.BridgeActivity
import com.moengage.capacitor.MoECapacitorCorePlugin

class MainActivity : BridgeActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    registerPlugin(MoECapacitorCorePlugin::class.java)
    super.onCreate(savedInstanceState)
  }
}
