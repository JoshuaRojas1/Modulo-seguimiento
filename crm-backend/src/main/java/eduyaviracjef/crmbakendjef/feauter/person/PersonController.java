package eduyaviracjef.crmbakendjef.feauter.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/api/person")
public class PersonController {

    @Autowired
    PersonService personService;


   //Create
   
    @PostMapping("/save")
    public Person save(@RequestBody Person person) {
      return personService.save(person);

    }  


    //Read

    @GetMapping("/{id}")
    public Person findById(@PathVariable Long id){
        return personService.findById(id);

    }
    //update

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Person finById(@RequestBody Person person){
        return personService.save(person);

    }
    
    
    //delete
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteById(@PathVariable Long id){
            personService.deleteById(id);
        return "registro eliminado";
    }

    @GetMapping("/all")
    public List findAll(){
        return personService.findAll();
    }
}
