package com.decafmango.thirdweblab;

import com.decafmango.thirdweblab.dao.AttemptRepositoryBean;
import com.decafmango.thirdweblab.model.Attempt;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Named
@ApplicationScoped
public class CheckHitBean {

    @Inject
    private AttemptRepositoryBean attemptRepositoryBean;

    public void check(Integer x, Float y, Float r) {
        Attempt attempt = new Attempt(null, x, y, r, LocalDateTime.now(),  isHit(x, y, r));
        attemptRepositoryBean.createAttempt(attempt);
    }

    public boolean isHit(Integer x, Float y, Float r) {
        if (x > 0 && y > 0)
            return false;
        else if (x <= 0 && y >= 0)
            return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
        else if (x <= 0 && y <= 0)
            return y >= -x - r;
        else if (x >= 0 && y <= 0)
            return y >= -r;
        else
            return false;
    }
}
