# DockerfileWebServer

### Zad3
a. zbudowanie obrazu o nazwie webserver <br />
   docker build -t webserver .<br />
   zbudowal sie obraz o rozmiarze 54.2MB <br />
   docker images <br />
   ![Screenshot 2021-11-10 10:42:28](https://user-images.githubusercontent.com/73463891/141089336-9be7c658-c027-4543-b44e-f3a2092d825d.png) <br />
b. uruchomienie kontenera webcontainer na podstawie obrazu webserver z mapowaniem portow 8080:8080 <br />
   docker run -dp 8080:8080 --name webcontainer webserver <br />
   serwer dziala: <br />
   ![Screenshot 2021-11-10 10:57:55](https://user-images.githubusercontent.com/73463891/141091936-b61558be-c792-4298-88ff-5c51df0e505f.png) <br />
c. logi uruchomionego serwera: <br />
    docker logs webcontainer <br />
   ![Screenshot 2021-11-10 11:00:14](https://user-images.githubusercontent.com/73463891/141092261-f86167ec-f90b-453e-8d5b-cfbe4f4f801d.png) <br />
d. obraz posiada 5 warstw <br />
   docker image inspect webserver | jq '.[].RootFS.Layers' <br />
  ![Screenshot 2021-11-10 11:03:05](https://user-images.githubusercontent.com/73463891/141092828-e45c80a8-1ddb-424d-b429-63e292e870cb.png) <br />

### Zad4
W celu wspoldzielenia naszego obrazu nalezy utworzyc repozytorium na DockerHub. Nastepnie mozemy wrzucic tam nasz obraz. W tym celu logujemy 
sie w konsoli i korzystamy z polecen: <br />
  docker tag webserver 91059/webserver <br />
Nastepnie 'wypychamy' obraz z domyslnym tagiem latest <br />
  docker push 91059/webserver <br />
Nasz obraz jest w reposytorium https://hub.docker.com/repository/docker/91059/webserver <br />

Aby go uruchomic mozemy skorzystac z DockerPlay https://labs.play-with-docker.com/ <br />
Po zalogowaniu klikamy add new instance -> nastepnie uruchamiamy obraz: <br />
  docker run -dp 8080:8080 91059/webserver <br />
i klikamy w przycisk z numerm portu '8080'. Powinnismy zostac przekierowani do strony na ktorej uruchomiony jest nasz serwer.
