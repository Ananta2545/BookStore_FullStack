FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml first for dependency caching
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application (skip tests for faster build)
RUN mvn clean package -DskipTests -B


FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

EXPOSE 8080

# Copy the built jar from build stage
COPY --from=build /app/target/bookstore_backend-0.0.1-SNAPSHOT.jar /app/bookstore_backend.jar

# Run with proper memory settings
ENTRYPOINT ["java", "-Xmx512m", "-jar", "bookstore_backend.jar"]