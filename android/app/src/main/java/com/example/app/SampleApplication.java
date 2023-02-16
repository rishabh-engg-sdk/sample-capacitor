package com.example.app;

import android.app.Application;
import android.util.Log;
import com.google.firebase.messaging.FirebaseMessaging;
import com.moengage.capacitor.MoEInitializer;
import com.moengage.core.MoEngage;
import com.moengage.firebase.MoEFireBaseHelper;

public class SampleApplication extends Application {

  @Override public void onCreate() {
    super.onCreate();

    MoEngage.Builder moEngage = new MoEngage.Builder(this, "YOUR_APP_ID");
    MoEInitializer.initialiseDefaultInstance(this, moEngage);
    FirebaseMessaging.getInstance().getToken().addOnSuccessListener(
      s -> {
        Log.d("SampleApplication", "onCreate: " + s);
        MoEFireBaseHelper.getInstance().passPushToken(this, s);
      });
  }
}
