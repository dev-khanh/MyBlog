package autoapk;
import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.widget.Toast;
import androidx.core.content.FileProvider;
import com.myblog.R;
import java.io.File;
import static android.content.Intent.FLAG_ACTIVITY_NEW_TASK;
public class DownloadController {
    Context context;
    private String FILE_NAME = "SampleDownloadApp.apk";
    private String FILE_BASE_PATH = "file://";
    private String MIME_TYPE = "application/vnd.android.package-archive";
    private String PROVIDER_PATH = ".provider";
    private String APP_INSTALL_PATH = "\"application/vnd.android.package-archive\"";
    public DownloadController(Context context) {
        this.context = context;
    }
    public void enqueueDownload() {
        String destination = context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS).toString() + "/";
        destination += FILE_NAME;
        Uri uri = Uri.parse(FILE_BASE_PATH+destination);
        File file = new File(destination);
        if (file.exists()) file.delete();
        DownloadManager downloadManager =(DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
        Uri downloadUri = Uri.parse("https://github.com/dev-khanh/flutter_demo/raw/master/lib/apk/app-release.apk");
        DownloadManager.Request request = new DownloadManager.Request(downloadUri);
        request.setMimeType(MIME_TYPE);
        request.setTitle(context.getString(R.string.title_file_download));
        request.setDescription(context.getString(R.string.downloading));
        // set destination
        request.setDestinationUri(uri);
        showInstallOption(destination, uri);
        // Enqueue a new download and same the referenceId
        downloadManager.enqueue(request);
        Toast.makeText(context, context.getString(R.string.downloading), Toast.LENGTH_LONG).show();
    }

    private void showInstallOption(final String destination, final Uri uri){
        BroadcastReceiver onComplete = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                    Uri contentUri = FileProvider.getUriForFile(context, "com.myblog" + PROVIDER_PATH, new File(destination));
                    Intent install = new Intent(Intent.ACTION_VIEW);
                    install.setFlags(FLAG_ACTIVITY_NEW_TASK);
                    install.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
                    install.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    install.putExtra(Intent.EXTRA_NOT_UNKNOWN_SOURCE, true);
                    install.setData(contentUri);
                    context.startActivity(install);
                    context.unregisterReceiver(this);
                    // finish()
                } else {
                    Intent install = new Intent(Intent.ACTION_VIEW);
                    install.setFlags(FLAG_ACTIVITY_NEW_TASK);
                    install.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    install.setDataAndType(uri, APP_INSTALL_PATH);
                    context.startActivity(install);
                    context.unregisterReceiver(this);
                    // finish()
                }
            }
        };
        context.registerReceiver(onComplete,new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));
    }
}
