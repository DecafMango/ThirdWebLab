package com.decafmango.thirdweblab.dao;

import com.decafmango.thirdweblab.model.Attempt;

import java.util.List;

public interface AttemptRepository {

    void createAttempt(Attempt attempt);

    List<Attempt> getAllAttempts();

    void deleteAllAttempts();
}
