#include "DHT.h" //biblioteca DHT.h faz o calculo e transforma em 2 dados diferentes temperatura e umidade
#define dht_type DHT11 //define qual o tipo de sensor DHTxx que se está utilizano
int dht_pin = A1; //setar entrada de dados
const int LM35 = A5;
float temperaturaLM35;
DHT dht_1 = DHT(dht_pin, dht_type); //pode-se configurar diversos sensores DHTxx

void setup()
{
  Serial.begin(9600);//Inicialização
  dht_1.begin();
}

void loop()
{
  temperaturaLM35 = (float(analogRead(LM35))*5/(1023))/0.01;
  float umidade = dht_1.readHumidity();//define a entrada da umidade do DHT11
  float temperaturaDHT11 = dht_1.readTemperature();//define a entrada da temperatura do DHT11
  if (isnan(temperaturaDHT11) or isnan(umidade))
  {
    Serial.println("Erro ao ler o DHT");
  }
  else
  {
    Serial.print(umidade);
    Serial.print(", ");
    Serial.print(temperaturaDHT11);
    Serial.print(", ");
    Serial.println(temperaturaLM35);
  }
  delay(2000);
}
