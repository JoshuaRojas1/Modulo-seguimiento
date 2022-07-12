package edu.yavirac.crmbackend.feature.opportunity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/opportunity")
public class OpportunityController {

    @Autowired
    OpportunityService opportunityService;

    //CREATE

    @PostMapping("/save")
    public Opportunity save(@RequestBody Opportunity opportunity){

        return opportunityService.save(opportunity);
        
    }

    @GetMapping("/{id}")
    public Opportunity findById(@PathVariable long id){
        return opportunityService.findById(id);
    }
    
    @PutMapping("/update")
    public Opportunity update(@RequestBody Opportunity opportunity){
        return opportunityService.save(opportunity);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteById(@PathVariable long id){
        opportunityService.deleteById(id);
        return "Registro Eliminado :)";
    }

    @GetMapping("/all")
    public List findAll(){
        return opportunityService.findAll();
    }



}   

