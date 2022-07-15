-- SEQUENCE: public.opportunities_oportunity_id_seq

-- DROP SEQUENCE IF EXISTS public.opportunities_oportunity_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.opportunities_oportunity_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY opportunities.opportunity_id;

ALTER SEQUENCE public.opportunities_oportunity_id_seq
    OWNER TO postgres;

-- Table: public.opportunities

-- DROP TABLE IF EXISTS public.opportunities;

CREATE TABLE IF NOT EXISTS public.opportunities
(
    prospecto_id integer,
    monto character varying COLLATE pg_catalog."default",
    etapa_id integer,
    vendedor_id integer,
    campania_id integer,
    opportunity_id integer NOT NULL DEFAULT nextval('opportunities_oportunity_id_seq'::regclass),
    created timestamp with time zone,
    updated timestamp with time zone,
    enable boolean,
    CONSTRAINT opportunities_pkey PRIMARY KEY (opportunity_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.opportunities
    OWNER to postgres;