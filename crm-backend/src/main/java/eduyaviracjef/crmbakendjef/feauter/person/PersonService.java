package eduyaviracjef.crmbakendjef.feauter.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PersonService {

    @Autowired
    PersonRepository personRepository;
    
    //Create
    public Person save(Person person){
        return personRepository.save(person);
    }

    //Read
    public Person findById(Long id){
        return personRepository.findById(id).orElse(new Person());
    }

    //update = Create (put)

    //Delete
    public void deleteById(Long id){
      personRepository.deleteById(id);

    }

    public List<Person> findAll(){
        return personRepository.findAll();

    }
}
