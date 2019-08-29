package com.qtmeats.model;

public class Tamaño {
	private int id;
	private String tamaño;

	public Tamaño() {
	}

	public Tamaño(int id, String tamaño) {
		this.id = id;
		this.tamaño = tamaño;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTamaño() {
		return tamaño;
	}

	public void setTamaño(String tamaño) {
		this.tamaño = tamaño;
	}

	@Override
	public String toString() {
		return "Tamaño [id=" + id + ", tamaño=" + tamaño + "]";
	}

}
