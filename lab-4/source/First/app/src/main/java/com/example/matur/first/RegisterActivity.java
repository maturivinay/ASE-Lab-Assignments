package com.example.matur.first;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class RegisterActivity extends AppCompatActivity {

    private GoogleApiClient client;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        addlistener();
    }
    public void addlistener(){
        EditText e1 = (EditText) findViewById(R.id.editText);
        EditText e2 = (EditText) findViewById(R.id.editText2);
        Button btn = (Button) findViewById(R.id.button);
        btn.setOnClickListener(new View.OnClickListener()

        {
            public void onClick (View v){
                Intent inten=new Intent("com.example.usgir.login.Main2Activity");
                startActivity(inten);
            }
        });
    }
}
