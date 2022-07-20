package seguimiento.crmbackend.feature.etapa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/etapa")
public class EtapaController {

    @Autowired
    EtapaService etapaService;
    //CRUD = Crear , leer , Actualizar , Eliminar

    //Create
    @PostMapping("/save")
    public Etapa save(@RequestBody Etapa etapa){
        return etapaService.save(etapa);
    }

    @GetMapping("/{id}")
    public Etapa findById(@PathVariable long id) {
        return etapaService.findById(id);
    }

    @PutMapping("/update")
    public Etapa update(@RequestBody Etapa etapa){
        return etapaService.save(etapa);
    }
    
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public String deleteByID(@PathVariable long id){
        etapaService.deleteByID(id);
        return "Registro eliminado";
    
    }

    @GetMapping("/all")
    public List<Etapa>findAll(){
        return etapaService.findAll();
    }
}

