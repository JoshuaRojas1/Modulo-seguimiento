package edu.yavirac.crmbackend.feature.phase;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhaseService {

    @Autowired
    PhaseRepository phaseRepository;

    public List<Phase> findAll(){
        return phaseRepository.findAll();
    }
    
}
