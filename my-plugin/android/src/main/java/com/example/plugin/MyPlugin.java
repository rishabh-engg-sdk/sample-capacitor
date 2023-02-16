package com.example.plugin;

import android.util.Log;

public class MyPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
