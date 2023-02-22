package com.capacitor.example

import android.os.Bundle
import com.getcapacitor.BridgeActivity
import com.moengage.capacitor.MoECapacitorCorePlugin

class MainActivity : BridgeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        registerPlugins(
            listOf(
                MoECapacitorCorePlugin::class.java,
                EchoPlugin::class.java,
                ActivityPlugin::class.java,
                CalculatePlugin::class.java
            )
        )
        super.onCreate(savedInstanceState)
    }
}
