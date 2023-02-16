package com.example.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "MyPlugin")
public class MyPluginPlugin extends Plugin {

    private MyPlugin implementation = new MyPlugin();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

   @PluginMethod()
   public void openMap(PluginCall call) {
     Double latitude = call.getDouble("latitude");
     Double longitude = call.getDouble("longitude");

     // more logic

     call.resolve();
   }
}
