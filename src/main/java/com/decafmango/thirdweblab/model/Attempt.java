package com.decafmango.thirdweblab.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "attempts")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Attempt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "x")
    private Integer x;
    @Column(name = "y")
    private Float y;
    @Column(name = "r")
    private Float r;
    @Column(name = "time")
    private LocalDateTime time;
    @Column(name = "isHit")
    private Boolean isHit;

    public String formatTime() {
        return time.format(DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss"));
    }
}
