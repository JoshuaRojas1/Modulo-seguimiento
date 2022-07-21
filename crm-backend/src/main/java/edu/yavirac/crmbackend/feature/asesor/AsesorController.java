package edu.yavirac.crmbackend.feature.asesor;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin ({"*"})
@RequestMapping ("/api/asesor")
public class AsesorController {


    @Autowired
    AsesorService asesorService;

    
    // CRUD = CREAR - LEER - ACTUALIZAR - ELMINAR


    // CREATE 

    @PostMapping ("/save")
    public Asesor save(@RequestBody Asesor asesor) {
        return asesorService.save(asesor);


    }


    @GetMapping("/{id}")
    public Asesor finById(@PathVariable long id){
        return asesorService.findById(id);
    }


    @PutMapping("/update")
    public Asesor update(@RequestBody Asesor asesor){
        return asesorService.save(asesor);
    }


    @DeleteMapping("/delete")
    
    public String deleteById(@PathVariable long id){
        asesorService.deleteById(id);
        return "Registro Elminado";
    }
    @GetMapping ("/all")
    public List <Asesor> findAll(){
        return asesorService.findAll();
    }
    
}

