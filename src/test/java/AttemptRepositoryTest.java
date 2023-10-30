import com.decafmango.thirdweblab.dao.AttemptRepositoryBean;
import com.decafmango.thirdweblab.model.Attempt;
import org.junit.jupiter.api.*;
import org.testcontainers.containers.PostgreSQLContainer;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Properties;

@DisplayName("AttemptRepository test")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class AttemptRepositoryTest {

    private static PostgreSQLContainer<?> postgresContainer;
    private static AttemptRepositoryBean attemptRepositoryBean;

    @BeforeAll
    public static void setup() {
        postgresContainer = new PostgreSQLContainer<>()
                .withDatabaseName("test")
                .withUsername("test")
                .withPassword("test")
                .withExposedPorts(5432);
        postgresContainer.start();

        Properties properties = new Properties();
        properties.setProperty("jakarta.persistence.jdbc.url", postgresContainer.getJdbcUrl());
        properties.setProperty("jakarta.persistence.jdbc.user", postgresContainer.getUsername());
        properties.setProperty("jakarta.persistence.jdbc.password", postgresContainer.getPassword());

        attemptRepositoryBean = new AttemptRepositoryBean("psql-eclipselink-test", properties);
    }

    @Test
    @Order(value = 1)
    public void should_create_attempt() {
        attemptRepositoryBean.createAttempt(new Attempt(null, 1, 1F, 1F, LocalDateTime.now(), false));
        Assertions.assertEquals(1, attemptRepositoryBean.getEntityManager().createQuery("select a from Attempt as a").getResultList().size());
    }

    @Test
    @Order(value = 2)
    public void should_return_all_attempts() {
        List<Attempt> attempts = attemptRepositoryBean.getAllAttempts();
        Assertions.assertEquals(attempts.size(), attemptRepositoryBean.getEntityManager().createQuery("select a from Attempt as a").getResultList().size());
    }

    @Test
    @Order(value = 3)
    public void should_delete_attempts() {
        attemptRepositoryBean.deleteAllAttempts();
        Assertions.assertEquals(0, attemptRepositoryBean.getEntityManager().createQuery("select a from Attempt as a").getResultList().size());
    }


}