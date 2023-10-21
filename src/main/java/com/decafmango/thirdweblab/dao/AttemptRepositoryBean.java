package com.decafmango.thirdweblab.dao;

import com.decafmango.thirdweblab.model.Attempt;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.persistence.*;

import java.util.List;

@Named
@ApplicationScoped
public class AttemptRepositoryBean implements AttemptRepository {

    private final EntityManagerFactory factory = Persistence.createEntityManagerFactory("psql-eclipselink");
    private final EntityManager entityManager = factory.createEntityManager();
    private final EntityTransaction transaction = entityManager.getTransaction();

    @Override
    public void createAttempt(Attempt attempt) {
        transaction.begin();
        entityManager.persist(attempt);
        transaction.commit();
    }

    @Override
    public List<Attempt> getAllAttempts() {
        Query query = entityManager.createQuery("select a from Attempt as a order by a.time");
        System.out.println(query.getResultList());
        return query.getResultList();
    }

    @Override
    public void deleteAllAttempts() {
        Query query = entityManager.createQuery("delete from Attempt");
        transaction.begin();
        query.executeUpdate();
        transaction.commit();
    }
}
