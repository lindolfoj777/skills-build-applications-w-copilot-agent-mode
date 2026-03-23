from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.db import transaction

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        with transaction.atomic():
            self.stdout.write(self.style.WARNING('Apagando dados antigos...'))
            User.objects.all().delete()
            Team.objects.all().delete()
            Activity.objects.all().delete()
            Leaderboard.objects.all().delete()
            Workout.objects.all().delete()

            self.stdout.write(self.style.SUCCESS('Populando times...'))
            marvel = Team.objects.create(name='marvel')
            dc = Team.objects.create(name='dc')

            self.stdout.write(self.style.SUCCESS('Populando usuários...'))
            tony = User.objects.create(name='Tony Stark', email='tony@marvel.com', team=marvel.name)
            steve = User.objects.create(name='Steve Rogers', email='steve@marvel.com', team=marvel.name)
            bruce = User.objects.create(name='Bruce Wayne', email='bruce@dc.com', team=dc.name)
            clark = User.objects.create(name='Clark Kent', email='clark@dc.com', team=dc.name)

            self.stdout.write(self.style.SUCCESS('Populando atividades...'))
            Activity.objects.create(user=tony.name, type='run', duration=30, date='2023-01-01')
            Activity.objects.create(user=steve.name, type='swim', duration=45, date='2023-01-02')
            Activity.objects.create(user=bruce.name, type='cycle', duration=60, date='2023-01-03')
            Activity.objects.create(user=clark.name, type='fly', duration=120, date='2023-01-04')

            self.stdout.write(self.style.SUCCESS('Populando leaderboard...'))
            Leaderboard.objects.create(team=marvel.name, points=150)
            Leaderboard.objects.create(team=dc.name, points=180)

            self.stdout.write(self.style.SUCCESS('Populando treinos...'))
            Workout.objects.create(name='Pushup', description='Do 20 pushups', difficulty='easy')
            Workout.objects.create(name='Sprint', description='Run 100m as fast as possible', difficulty='medium')
            Workout.objects.create(name='Marathon', description='Run 42km', difficulty='hard')

            self.stdout.write(self.style.SUCCESS('Banco de dados populado com dados de teste!'))
