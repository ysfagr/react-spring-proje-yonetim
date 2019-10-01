package io.agileintelligence.ppmtool.payload;


import javax.validation.constraints.NotBlank;

public class LoginRequest {


    @NotBlank(message = "Kullanıcı adı boş geçilemez")
    private String username;
    @NotBlank(message = "Şifre boş geçilemez")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
