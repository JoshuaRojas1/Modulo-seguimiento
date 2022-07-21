package edu.yavirac.crmbackend.feature.phase;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PhaseRepository extends CrudRepository<Phase, Long> {

    List<Phase> findAll();
    
}
