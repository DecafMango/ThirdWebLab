package com.decafmango.thirdweblab.dao;

import com.decafmango.thirdweblab.model.Attempt;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Properties;

@Named
@ApplicationScoped
@Getter
@Setter
public class AttemptRepositoryBean implements AttemptRepository {

    private EntityManagerFactory factory;
    private EntityManager entityManager;
    private EntityTransaction transaction;

    public AttemptRepositoryBean() {
        factory = Persistence.createEntityManagerFactory("psql-eclipselink");
        entityManager = factory.createEntityManager();
        transaction = entityManager.getTransaction();
    }

    public AttemptRepositoryBean(String persistenceUnitName, Properties properties) {
        factory = Persistence.createEntityManagerFactory(persistenceUnitName, properties);
        entityManager = factory.createEntityManager();
        transaction = entityManager.getTransaction();
    }

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
