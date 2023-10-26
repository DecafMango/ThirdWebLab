package com.decafmango.thirdweblab;

import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Named
@RequestScoped
@Getter
@Setter
public class InputValuesBean {

    @Inject
    private CheckHitBean checkHitBean;

    private String x = "0";
    private String y = "1.0";
    private String r = "3.0";

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
            r = "3.0";
            return;
        }
        isValid = true;
        checkHitBean.check(Integer.parseInt(x), Float.parseFloat(y), Float.parseFloat(r));
        r = "3.0";
    }

}
