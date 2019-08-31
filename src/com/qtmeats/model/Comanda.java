package com.qtmeats.model;

public class Comanda {
	private int id;
	private Usuario usuario;
	private float total;
	private String comentarios;
	private String direccionEntrega;

	public Comanda() {
	}

	public Comanda(int id, Usuario usuario, float total, String comentarios, String direccionEntrega) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.total = total;
		this.comentarios = comentarios;
		this.direccionEntrega = direccionEntrega;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getComentarios() {
		return comentarios;
	}

	public void setComentarios(String comentarios) {
		this.comentarios = comentarios;
	}

	public String getDireccionEntrega() {
		return direccionEntrega;
	}

	public void setDireccionEntrega(String direccionEntrega) {
		this.direccionEntrega = direccionEntrega;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	
	@Override
	public String toString() {
		return "Comanda [id=" + id + ", usuario=" + usuario + ", total=" + total + ", comentarios=" + comentarios
				+ ", direccionEntrega=" + direccionEntrega + "]";
	}


}
