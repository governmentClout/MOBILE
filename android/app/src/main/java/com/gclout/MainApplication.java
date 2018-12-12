package com.gclout;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.goldenowl.twittersignin.TwitterSigninPackage;
import com.horcrux.svg.SvgPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.react.rnspinkit.RNSpinkitPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import cl.json.RNSharePackage;
import com.RNPlayAudio.RNPlayAudioPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new TwitterSigninPackage(),
            new SvgPackage(),
            new RNGoogleSigninPackage(),
            new PickerPackage(),
            new RNSpinkitPackage(),
            new LinearGradientPackage(), new FBSDKPackage(mCallbackManager),
          new VectorIconsPackage(), new RNSharePackage(), new RNPlayAudioPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.setApplicationId("764434360563746");
    FacebookSdk.sdkInitialize(this);
    // AppEventsLogger.activateApp(this);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
