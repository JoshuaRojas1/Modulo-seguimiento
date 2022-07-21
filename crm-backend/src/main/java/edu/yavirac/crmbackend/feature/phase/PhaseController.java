package edu.yavirac.crmbackend.feature.phase;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/phase")
@CrossOrigin({"*"})
public class PhaseController {

    @Autowired

    PhaseService phaseService;

    @GetMapping("/findAll")
    public List<Phase> findAll(){
        return phaseService.findAll();

    }
    
}
