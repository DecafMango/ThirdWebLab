package com.decafmango.thirdweblab;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Named
@SessionScoped
@Getter
@Setter
public class InputValuesBean implements Serializable {

    @Inject
    private CheckHitBean checkHitBean;

    private String x = "0";
    private String y = "1.0";
    private String r = "1.0";

    private Boolean isValid = true;

    public void checkHit() {
        try {
            Float yFlt = Float.parseFloat(y);
            if (!(yFlt > -3 && yFlt < 5)) {
                isValid = false;
                return;
            }
        } catch (NumberFormatException e) {
            isValid = false;
            return;
        }
        isValid = true;
        checkHitBean.check(Integer.parseInt(x), Float.parseFloat(y), Float.parseFloat(r));
    }

}
