package com.qtmeats.model;

public class Usuario {
	private int id;
	private String nombre;
	private String correo;
	private String contraseña;
	private String telefono;
	private boolean esAdmin;
	private String compañia;

	public Usuario() {
	}

	public Usuario(int id, String nombre, String correo, String contraseña, String telefono, boolean esAdmin,
			String compañia) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.correo = correo;
		this.contraseña = contraseña;
		this.telefono = telefono;
		this.esAdmin = esAdmin;
		this.compañia = compañia;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public boolean isEsAdmin() {
		return esAdmin;
	}

	public void setEsAdmin(boolean esAdmin) {
		this.esAdmin = esAdmin;
	}

	public String getCompañia() {
		return compañia;
	}

	public void setCompañia(String compañia) {
		this.compañia = compañia;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nombre=" + nombre + ", correo=" + correo + ", contraseña=" + contraseña
				+ ", telefono=" + telefono + ", esAdmin=" + esAdmin + ", compañia=" + compañia + "]";
	}

}
