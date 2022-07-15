-- SEQUENCE: public.asesor_asesor_id_seq

-- DROP SEQUENCE IF EXISTS public.asesor_asesor_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.asesor_asesor_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY asesor.id;

ALTER SEQUENCE public.asesor_asesor_id_seq
    OWNER TO postgres;

    -- Table: public.asesor

-- DROP TABLE IF EXISTS public.asesor;

CREATE TABLE IF NOT EXISTS public.asesor
(
    id integer NOT NULL DEFAULT nextval('asesor_asesor_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    correo character varying COLLATE pg_catalog."default",
    telefono character varying COLLATE pg_catalog."default",
    created date,
    update date,
    activo boolean,
    CONSTRAINT asesor_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.asesor
    OWNER to postgres;