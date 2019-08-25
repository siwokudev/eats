package com.qtmeats.model;

public class Bebida {
	private Integer id;
	private String nombre;
	private Integer idTipo;
	private Float precio;

	public Bebida(Integer id, String nombre, Integer idTipo, Float precio) {
		this.id = id;
		this.nombre = nombre;
		this.idTipo = idTipo;
		this.precio = precio;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Integer getIdTipo() {
		return idTipo;
	}

	public void setIdTipo(Integer idTipo) {
		this.idTipo = idTipo;
	}

	public Float getPrecio() {
		return precio;
	}

	public void setPrecio(Float precio) {
		this.precio = precio;
	}

}
