package edu.yavirac.crmbackend.feature.opportunity;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class OpportunityPerson {

    @Id
    private long id;
    private Long opportunityId;
    private Long personId;
    
}
