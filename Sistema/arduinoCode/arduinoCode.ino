//Inluindo as Bibliotecas
#include <DHT.h>
// #include <DHT_U.h>
// #include <Adafruit_Sensor.h>
// #include <DHT.h>
// #include <DHT_U.h>
// #include "DHT.h"

//Definido as saidas de dados
#define DHTPIN A0
#define LM35PIN A5
#define LUMIPIN A1
#define CHAVPIN 7

//Especificando o tipo de sensor DHT
DHT dht(DHTPIN, DHT11);

//Define o inicio do looping
void setup()
{
pinMode(DHTPIN, INPUT);
pinMode(CHAVPIN, INPUT);
Serial.begin(9600);
dht.begin();
}

//Looping
void loop()
{
float dht11_umidade = dht.readHumidity(); //Define as saidas de dados
float dht11_temperatura = dht.readTemperature();
Serial.print(dht11_umidade); //Define o formato da saida de dados
Serial.print(";");
//Serial.print(dht11_temperatura);
//Serial.print(";");
//float luminosidade = analogRead(LUMIPIN);
//Serial.print(luminosidade);
//Serial.print(";");
float lm35_temperatura = analogRead(LM35PIN);//Calcuos temperatura LM35
lm35_temperatura = lm35_temperatura * 0.00488;
lm35_temperatura = lm35_temperatura * 100;
Serial.print(lm35_temperatura);
//Serial.print(";");
//int chave = digitalRead(7);
//if (chave == 0)
//{
//Serial.print("1");
//}
//else
//{
//Serial.print("0");
//}
Serial.println();//Pula uma linha 
delay(4000);//Deley de 20 minutos
}