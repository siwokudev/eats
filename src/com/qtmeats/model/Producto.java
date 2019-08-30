package com.qtmeats.model;

public class Producto {
	private int id;
	private String nombre;
	private TipoProducto tipoProducto;
	private TipoComida tipoComida;
	private TipoBebida tipoBebida;
	private TipoDulces tipoDulce;
	private float precio;
	private String descripcion;
	private String imagenUrl;

	public Producto() {
	}

	
	public Producto(int id, String nombre, TipoProducto tipo, TipoComida tipoComida, TipoBebida tipoBebida,
			TipoDulces tipoDulce, float precio) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.tipoProducto = tipo;
		this.tipoComida = tipoComida;
		this.tipoBebida = tipoBebida;
		this.tipoDulce = tipoDulce;
		this.precio = precio;

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

	public TipoProducto getTipo() {
		return tipoProducto;
	}

	public void setTipo(TipoProducto tipo) {
		this.tipoProducto = tipo;
	}

	public TipoComida getTipoComida() {
		return tipoComida;
	}

	public void setTipoComida(TipoComida tipoComida) {
		this.tipoComida = tipoComida;
	}

	public TipoBebida getTipoBebida() {
		return tipoBebida;
	}

	public void setTipoBebida(TipoBebida tipoBebida) {
		this.tipoBebida = tipoBebida;
	}

	
	
	public TipoDulces getTipoDulce() {
		return tipoDulce;
	}

	public void setTipoDulce(TipoDulces tipoDulce) {
		this.tipoDulce = tipoDulce;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getImagenUrl() {
		return imagenUrl;
	}

	public void setImagenUrl(String imagenUrl) {
		this.imagenUrl = imagenUrl;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", nombre=" + nombre + ", tipo=" + tipoProducto + ", tipoComida=" + tipoComida
				+ ", tipoBebida=" + tipoBebida + ", tipoDulces=" + tipoDulce + ", precio=" + precio + ", descripcion="
				+ descripcion + ", imagenUrl=" + imagenUrl + "]";
	}

	

}
