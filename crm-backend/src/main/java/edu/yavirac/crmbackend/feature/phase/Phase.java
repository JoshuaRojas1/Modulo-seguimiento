package edu.yavirac.crmbackend.feature.phase;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;


@Data
@Table("phases")
public class Phase {

    @Id
    private long id;
    private String name;
    
    
}
