package com.myblog;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.facebook.react.ReactActivity;
import static android.Manifest.permission.WRITE_EXTERNAL_STORAGE;

public class MainActivity extends ReactActivity {
  public static final int PERMISSION_REQUEST_CODE = 1;
  @Override
  protected String getMainComponentName() {
    return "MyBlog";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    functionCheckPermissition();
  }
  private void functionCheckPermissition() {
    if (!checkPermission()){
      requestPermission();
    }
  }
  private boolean checkPermission(){
    int resual = ContextCompat.checkSelfPermission(getApplicationContext(), WRITE_EXTERNAL_STORAGE);
    return resual == PackageManager.PERMISSION_GRANTED;
  }
  private void requestPermission(){

    ActivityCompat.requestPermissions(this, new String[]{WRITE_EXTERNAL_STORAGE }, PERMISSION_REQUEST_CODE);
  }
  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    switch (requestCode){
      case PERMISSION_REQUEST_CODE:
        if (grantResults.length > 0){
          boolean writeStorage = grantResults[0] == PackageManager.PERMISSION_GRANTED;
          if (writeStorage){

          }else{
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
              if (shouldShowRequestPermissionRationale(WRITE_EXTERNAL_STORAGE)){
                showMessageOKCancel("Bạn cần cho phép truy cập file !!!",
                        new DialogInterface.OnClickListener(){
                          @Override
                          public void onClick(DialogInterface dialog, int which) {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                              requestPermissions(new String[]{WRITE_EXTERNAL_STORAGE}, PERMISSION_REQUEST_CODE);
                            }
                          }
                        }
                );
              }
            }
          }
        }
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }
  private void showMessageOKCancel(String message, DialogInterface.OnClickListener okListener) {
    new AlertDialog.Builder(MainActivity.this)
            .setMessage(message)
            .setCancelable(false)
            .setPositiveButton("Có", okListener)
            .setNegativeButton("Không", okListener)
            .create()
            .show();
  }
}
