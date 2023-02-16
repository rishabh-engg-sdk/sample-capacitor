package com.example.app;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.moengage.capacitor.MoECapacitorCorePlugin;

public class MainActivity extends BridgeActivity {

  @Override protected void onCreate(Bundle savedInstanceState) {
    registerPlugin(MoECapacitorCorePlugin.class);
    super.onCreate(savedInstanceState);
  }
}
